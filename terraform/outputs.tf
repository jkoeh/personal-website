output "deploy_role_arn" {
  description = "Paste this ARN into the deploy workflow's role-to-assume field."
  value       = aws_iam_role.github_deploy_personal_website.arn
}
