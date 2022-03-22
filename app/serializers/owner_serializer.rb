class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :business, :occupation, :phone, :website, :email
end
