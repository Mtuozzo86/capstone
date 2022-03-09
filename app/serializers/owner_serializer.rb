class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :occupation, :phone, :website, :email, :owner_addresses
end
