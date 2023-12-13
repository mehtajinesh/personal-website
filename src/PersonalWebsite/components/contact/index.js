import './index.css';
const Contact = () => {
  return (
    <div class="container p-4 ">
      <div class="row">
        <form class="col-md">
          <div class="row g-4 my-1">
            <div class="col-md">
              <div class="display-6 fw-bold text-center">Interested in my portfolio? Contact me!
              </div>
              <div class="fs-5 text-center mb-4">Hello there! I'm thrilled that you're reaching out. Whether you have inquiries, collaboration ideas, or just want to chat, this is the place to do it. Fill out the form below, and let's start the conversation. Your messages make my day, and I'm looking forward to hearing from you!
              </div>
            </div>
          </div>

          <div class="row g-4 my-1">
            <div class="col-md">
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputFirstName" placeholder="John" required />
                <label for="floatingInputFirstName">First Name</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputLastName" placeholder="Doe" required />
                <label for="floatingInputLastName">Last Name</label>
              </div>
            </div>
          </div>
          <div class="row g-4 my-1">
            <div class="col-md">
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" required />
                <label for="floatingInputEmail">Email address</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="floatingSelectReason" required>
                  <option selected disabled value="">Select reason for contact</option>
                  <option value="new_job">Job Opportunity</option>
                  <option value="project_collab">Project Collaboration</option>
                  <option value="other">Other</option>
                </select>
                <label for="floatingSelectReason">Reason</label>
              </div>
            </div>
          </div>
          <div class="row g-4 my-1">
            <div class="col-md">
              <div class="form-floating">
                <textarea class="form-control" placeholder="Enter your message here" id="floatingMessage"></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
            </div>
          </div>
          <div class="row g-4 my-1">
            <div class="col-md text-center">
              <button class="btn btn-dark" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
