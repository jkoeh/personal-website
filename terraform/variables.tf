variable "create_oidc_provider" {
  description = "Set to false if the GitHub OIDC provider already exists in this AWS account (only one is allowed per account)."
  type        = bool
  default     = true
}
