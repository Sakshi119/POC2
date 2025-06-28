// You can add more testimonials and make them dynamic
const testimonials = [
  {
    name: "Swarna",
    role: "Business CEO",
    quote: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor eget nulla facilisis purus, massa hac sit vitae."`
  },
  {
    name: "Arjun",
    role: "Marketing Lead",
    quote: `"This team exceeded expectations in both design and delivery. Highly recommend!"`
  }
];

let index = 0;

function updateTestimonial() {
  const data = testimonials[index];
  document.querySelector(".testimonial h3").textContent = data.name;
  document.querySelector(".testimonial .position").textContent = data.role;
  document.querySelector(".testimonial .quote").textContent = data.quote;
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}
