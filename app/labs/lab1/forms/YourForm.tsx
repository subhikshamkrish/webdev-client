"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name: </label>
      <input
        id="wd-your-first-name"
        name="firstName"
        defaultValue="Subhiksha"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name: </label>
      <input
        id="wd-your-last-name"
        name="lastName"
        defaultValue="Muthukrishnan"
      />
      <br />
      <label htmlFor="wd-your-password">Practice password: </label>
      <input
        id="wd-your-password"
        type="password"
        autoComplete="new-password"
        placeholder="Enter a practice password"
      />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        name="bio"
        cols={40}
        rows={5}
        defaultValue="I am from Singapore and study Computer Science at Northeastern in Boston. I want to build interactive websites, connect them to databases, and deploy full-stack applications."
      />
      <fieldset>
        <legend>Class standing</legend>
        <input
          id="wd-your-undergraduate"
          type="radio"
          name="your-standing"
          value="undergraduate"
        />
        <label htmlFor="wd-your-undergraduate">Undergraduate</label>
        <input
          id="wd-your-graduate"
          type="radio"
          name="your-standing"
          value="graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>
      </fieldset>
      <fieldset>
        <legend>Enrollment (choose your status)</legend>
        <input
          id="wd-your-full-time"
          type="radio"
          name="your-enrollment"
          value="full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <input
          id="wd-your-part-time"
          type="radio"
          name="your-enrollment"
          value="part-time"
        />
        <label htmlFor="wd-your-part-time">Part-time</label>
      </fieldset>
      <fieldset>
        <legend>Interests</legend>
        <input
          id="wd-your-html"
          type="checkbox"
          name="interests"
          value="html"
          defaultChecked
        />
        <label htmlFor="wd-your-html">HTML and CSS</label>
        <input
          id="wd-your-js"
          type="checkbox"
          name="interests"
          value="javascript"
          defaultChecked
        />
        <label htmlFor="wd-your-js">JavaScript</label>
        <input
          id="wd-your-databases"
          type="checkbox"
          name="interests"
          value="databases"
          defaultChecked
        />
        <label htmlFor="wd-your-databases">Databases</label>
      </fieldset>
      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" name="major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">
        Topics to deepen (Ctrl-click to choose several):
      </label>
      <br />
      <select
        id="wd-your-topics"
        name="topics"
        multiple
        defaultValue={["WEB", "DATABASES"]}
      >
        <option value="WEB">Interactive websites</option>
        <option value="DATABASES">Databases</option>
        <option value="APIS">Back-end APIs</option>
        <option value="DEPLOYMENT">Deployment</option>
      </select>
      <br />
      <label htmlFor="wd-your-email">School email: </label>
      <input
        id="wd-your-email"
        name="email"
        type="email"
        defaultValue={"muthukrishnan.su@northeastern.edu"}
        placeholder="Enter your school email"
      />
      <br />
      <label htmlFor="wd-your-graduation">Expected graduation year: </label>
      <input
        id="wd-your-graduation"
        name="graduationYear"
        type="number"
        min={2026}
        max={2040}
        defaultValue={2027}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date: </label>
      <input
        id="wd-your-start-date"
        name="programStartDate"
        type="date"
        defaultValue="2025-08-01"
      />
      <br />
      <label htmlFor="wd-your-excitement">
        Course excitement (0–10; adjust to your rating):{" "}
      </label>
      <input
        id="wd-your-excitement"
        name="excitement"
        type="range"
        min={0}
        max={10}
        defaultValue={5}
      />
      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button
        id="wd-your-cancel"
        type="button"
        onClick={(event) => {
          event.currentTarget.form?.reset();
        }}
      >
        Cancel
      </button>
    </form>
  );
}
