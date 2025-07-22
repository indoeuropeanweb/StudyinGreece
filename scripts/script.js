
    // document.addEventListener('DOMContentLoaded', function() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
        
        // Optional: Open first item by default
        faqItems[0].classList.add('active');
        faqItems[0].querySelector('.faq-answer').style.maxHeight = 
            faqItems[0].querySelector('.faq-answer').scrollHeight + 'px';
    // });




    document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("eligibilityForm");
  // const successMessage = document.getElementById("success-message");

  const studentName = document.getElementById("textFName");
  const PhoneNo = document.getElementById("txtPhoneNo");
  const City = document.getElementById("txtCity");
  const Email = document.getElementById("txtEmail");
  const CallTime = document.getElementById("callTime");
  const inputs = form.querySelectorAll("input, select");

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();

      const fullName = {
        FirstName: studentName.value.split(" ")[0],
        lastName: studentName.value.split(" ").splice(1).join(" "),
      };

      const createLead = async () => {
        const queryParams = new URLSearchParams({
          Fname: fullName.FirstName || "",
          Lname: fullName.lastName || "",
          CountryCodeid: "67",
          PhoneNo: PhoneNo.value || "",
          WhatsappNo: PhoneNo.value || "",
          Emailid: Email.value || "",
          EnquirySourceCategoryID: 2,
          EnquirySourceID: 4,
          EnqStageid: 1,
          branchid: 0,
          Country1: "",
          Levelid: "",
          Intakeid: "",
          Address1Citytext: City.value || "",
          Isstatusid: "1",
          EnqDate: "",
          Dob: "",
          PrefferedCallBackTime: CallTime.value || 2,
          HighestQualifcation: "",
          PrefferedBranchID: 0,
          LandingPageUrl: window.location.href || "Study in Greece Website",
          PhonenoOTPStatus: "0",
        });

        const url = `https://crm.indoeuropean.in/WebService/Lead.asmx/OnlineLead?${queryParams}`;

        try {
          const response = await fetch(url, {
            method: "GET",
          });

          if (response.ok) {

            Toastify({
             text: "Form Submitted Successfully",
             className: "info",
             style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
             }
            }).showToast();

            //form reset
            form.reset();

            form.classList.remove("was-validated");
            inputs.forEach((input) => {
              input.classList.remove("is-valid", "is-invalid");
            });

            setTimeout(() => {
              // successMessage.classList.add("d-none");
              // form.classList.remove("d-none");

              inputs.forEach((input) => {
                input.value = "";
              });
            }, 5000);
          } else {
            alert("Query submission failed!");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Query submission failed!");
        }
      };

      if (form.checkValidity()) {
        createLead();
      }

      form.classList.add("was-validated");
    },
    false
  );

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      } else {
        input.classList.remove("is-valid");
      }
    });
  });
});



    // alert("working");