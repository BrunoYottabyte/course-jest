export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://github.com/brunoyottabyte.png" alt="Bruno Lindu" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Joao Siqueira"
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
