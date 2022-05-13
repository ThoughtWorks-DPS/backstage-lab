variable "SUBSCRIPTION_ID" {
  type = string
  }

variable "TENANT_ID" {
  type = string
  }

variable "CLIENT_ID" {
  type = string
} 

variable "CLIENT_SECRET" {
  type = string
 }

variable "resource_group" {
  type      = string
  default   = "backstage-poc-rg"
}

variable "region" {
  type      = string
  default   = "eastus"
}

variable "aks_cluster_name" {
    type    = string
    default = "backstage-aks-cluster"
}

variable "aks_cluster_dns_prefix" {
    type    = string
    default = "backstagek8scluster" 
}

variable "acr_name" {
    type = string
    default = "backstagepp"
}