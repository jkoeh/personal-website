# GitHub's OIDC provider — only one can exist per AWS account.
# If you already have one, set create_oidc_provider = false and the
# data source below will look it up instead.
resource "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 1 : 0

  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]

  # Thumbprints for token.actions.githubusercontent.com root CA.
  # AWS also validates via JWKS, but the resource requires at least one.
  thumbprint_list = [
    "6938fd4d98bab03faadb97b34396831e3780aea1",
    "1c58a3a8518e8759bf075b76b750d4f2df264fcd",
  ]
}

data "aws_iam_openid_connect_provider" "github" {
  count = var.create_oidc_provider ? 0 : 1
  url   = "https://token.actions.githubusercontent.com"
}

locals {
  oidc_provider_arn = var.create_oidc_provider ? (
    aws_iam_openid_connect_provider.github[0].arn
  ) : data.aws_iam_openid_connect_provider.github[0].arn
}

# IAM role assumed by GitHub Actions on push to main.
resource "aws_iam_role" "github_deploy_personal_website" {
  name = "github-deploy-personal-website"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Federated = local.oidc_provider_arn }
      Action    = "sts:AssumeRoleWithWebIdentity"
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        }
        # Locked to this exact repo + main branch. Forks and PRs are excluded.
        StringEquals = {
          "token.actions.githubusercontent.com:sub" = "repo:jkoeh/personal-website:ref:refs/heads/main"
        }
      }
    }]
  })
}

# Minimal S3 permissions — only what the deploy step needs.
resource "aws_iam_role_policy" "personal_website_deploy" {
  name = "personal-website-s3-deploy"
  role = aws_iam_role.github_deploy_personal_website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket",
      ]
      Resource = [
        "arn:aws:s3:::johannkoeh.io",
        "arn:aws:s3:::johannkoeh.io/*",
      ]
    }]
  })
}
