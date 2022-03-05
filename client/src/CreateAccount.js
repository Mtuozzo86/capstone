import "./CreateAccount.css";

function CreateAccount() {
  return (
    <div className="create-form-container">
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Website" />
        <input type="text" placeholder="Phone" />
      </form>
    </div>
  );
}

export default CreateAccount;
