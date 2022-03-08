class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :occupation, :owner_addresses
end
