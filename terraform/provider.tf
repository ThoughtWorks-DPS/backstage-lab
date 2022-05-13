provider "azurerm" {
    features {}

    subscription_id   = var.SUBSCRIPTION_ID
    tenant_id         = var.TENANT_ID
    client_id         = var.CLIENT_ID
    client_secret     = var.CLIENT_SECRET
}