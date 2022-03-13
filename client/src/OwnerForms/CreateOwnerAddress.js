function CreateOwnerAddress() {
  return (
    <>
      <div className="create-form-container">
        <form onSubmit={null}>
          <input
            name="street"
            type="text"
            placeholder="Street"
            value={null}
            onChange={null}
          />
          <input
            name="city"
            type="password"
            placeholder="City"
            value={null}
            onChange={null}
          />

          <input
            name="state"
            type="text"
            placeholder="State"
            value={null}
            onChange={null}
          />

          <input
            name="zip"
            type="text"
            placeholder="Zip"
            value={null}
            onChange={null}
          />

          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
export default CreateOwnerAddress;
