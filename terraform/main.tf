# Resource Group Creation
resource "azurerm_resource_group" "backstage-rg" {
    name        = var.resource_group
    location    = var.region
}

# # Azure Conatiner Registry creation
# resource "azurerm_container_registry" "backstage-acr" {
#   name                = var.acr_name
#   resource_group_name = "backstage-deployment"
#   location            = azurerm_resource_group.backstage-rg.location
#   sku                 = "basic"
#   admin_enabled       = false
# #   georeplications {
# #     location                = "East US"
# #     zone_redundancy_enabled = false
# #     tags                    = {}
# #   }
# #   georeplications {
# #     location                = "westeurope"
# #     zone_redundancy_enabled = true
# #     tags                    = {}
# #   }
# }

# Azure Kunernetes Servie cluster creation
resource "azurerm_kubernetes_cluster" "backstageaks-cluster" {
  name                = var.aks_cluster_name
  location            = azurerm_resource_group.backstage-rg.location
  resource_group_name = azurerm_resource_group.backstage-rg.name
  dns_prefix          = var.aks_cluster_dns_prefix

  default_node_pool {
    name       = "default"
    node_count = "1"
    vm_size    = "standard_d2_v2"
  }

  service_principal {
    client_id     = var.CLIENT_ID
    client_secret = var.CLIENT_SECRET
  }

  role_based_access_control_enabled = false

  tags = {
    environment = "Demo"
  }
}

# Linking ACR TO AKS
# resource "azurerm_role_assignment" "acr-aks-assignment" {
#   principal_id                     = "1fe32163-34b4-49e6-bb59-57128082d689" #objectId of Terraform Service Principal
#   role_definition_name             = "AcrPull"
#   scope                            = azurerm_container_registry.backstage-acr.id
#   skip_service_principal_aad_check = true
# }