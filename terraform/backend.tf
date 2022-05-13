# terraform {
#     backend "azurerm" {
#         resource_group_name  = "storage-account-rg"
#         storage_account_name = "terraform-storage-account"
#         container_name       = "terraform"
#         key                  = "terraform.tfstate"      
#     }
# }

terraform {
  backend "local" {
    path = "/Users/akshar.srivastava/Desktop/Thoughtworks/Projects/UBS/terraform.tfstate"
  }
}