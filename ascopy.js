// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".navbar a");

Array.prototype.forEach.call(navLinks, function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});
}


// ==========================================
// COURSE DATA
// ==========================================

window.courseData = {

    fundamentals: {
        icon: "🖥️",
        title: "Computer Fundamentals",
        description:
            "A beginner-friendly course designed to help you understand and confidently use a computer.",
        topics: [
            "Introduction to computers",
            "Windows operating system",
            "Keyboard and mouse skills",
            "Files and folders",
            "Internet and web browsing",
            "Basic computer security"
        ]
    },

    office: {
        icon: "📊",
        title: "Microsoft Office",
        description:
            "Learn the essential Microsoft Office applications used in schools, offices and businesses.",
        topics: [
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft PowerPoint",
            "Document formatting",
            "Tables and spreadsheets",
            "Professional presentations"
        ]
    },

    graphics: {
        icon: "🎨",
        title: "Graphics Design",
        description:
            "Develop practical skills for creating professional digital designs.",
        topics: [
            "Design principles",
            "Flyer design",
            "Poster design",
            "Logo design",
            "Social media graphics",
            "Print-ready designs"
        ]
    },

    web: {
        icon: "🌐",
        title: "Web Development",
        description:
            "Learn how to create modern, responsive websites from the ground up.",
        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive web design",
            "Website projects",
            "Git and GitHub basics"
        ]
    },

    programming: {
        icon: "💻",
        title: "Programming",
        description:
            "Build your programming foundation and learn how to solve problems using code.",
        topics: [
            "Programming fundamentals",
            "Variables and data types",
            "Conditions and loops",
            "Functions",
            "Problem solving",
            "Practical programming projects"
        ]
    },

    maintenance: {
        icon: "🔧",
        title: "Computer Maintenance",
        description:
            "Learn practical computer maintenance, troubleshooting and basic technical support.",
        topics: [
            "Computer hardware",
            "Software installation",
            "Operating system maintenance",
            "Troubleshooting",
            "Basic networking",
            "Computer maintenance"
        ]
    }

};


// ==========================================
// OPEN COURSE DETAILS
// ==========================================

window.showCourse = function (courseName) {

    const course = window.courseData[courseName];

    if (!course) {
        console.error("Course not found:", courseName);
        return;
    }

    const modal = document.getElementById("courseModal");
    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription =
        document.getElementById("modalDescription");
    const modalTopics =
        document.getElementById("modalTopics");

    if (!modal) {
        console.error("courseModal was not found");
        return;
    }

    modalIcon.textContent = course.icon;
    modalTitle.textContent = course.title;
    modalDescription.textContent = course.description;

    modalTopics.innerHTML = "";

    course.topics.forEach(function (topic) {

        const li = document.createElement("li");

        li.textContent = topic;

        modalTopics.appendChild(li);

    });

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ==========================================
// CLOSE COURSE DETAILS
// ==========================================

function closeCourse() {

    const modal = document.getElementById("courseModal");

    if (modal) {
        modal.classList.remove("active");
    }

    document.body.style.overflow = "";
}


// Close when clicking outside popup

const courseModal =
    document.getElementById("courseModal");

if (courseModal) {

    courseModal.addEventListener("click", function (event) {

        if (event.target === courseModal) {
            closeCourse();
        }

    });

}


// Close with Escape key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeCourse();
    }

});


// ==========================================
// GALLERY LIGHTBOX
// ==========================================

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


galleryItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        if (image && lightbox && lightboxImage) {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";
        }

    });

});


if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// ==========================================
// ENROLLMENT → WHATSAPP
// ==========================================

const enrollmentForm =
    document.getElementById("enrollmentForm");

if (enrollmentForm) {

    enrollmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const phone =
                document.getElementById("phone").value;

            const email =
                document.getElementById("email").value;

            const course =
                document.getElementById("course").value;

            const level =
                document.getElementById("level").value;

            const message =
                document.getElementById("message").value;

            const whatsappNumber =
                "2347050577211";

            const whatsappMessage =
                `Hello Ascopy Computer School,%0A%0A` +
                `I want to enroll for computer training.%0A%0A` +
                `Name: ${name}%0A` +
                `Phone: ${phone}%0A` +
                `Email: ${email}%0A` +
                `Course: ${course}%0A` +
                `Level: ${level}%0A` +
                `Message: ${message}`;

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            window.open(whatsappURL, "_blank");

        }
    );

}