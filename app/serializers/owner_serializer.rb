class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :occupation, :phone, :website, :owner_addresses
end
