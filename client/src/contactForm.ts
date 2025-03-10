const API_ROUTE = "https://localhost:3000/contact";

export function contactForm(element: HTMLFormElement) {
  element.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = element.querySelector("#name") as HTMLInputElement | null;
    const email = element.querySelector("#email") as HTMLInputElement | null;
    const phone = element.querySelector("#phone") as HTMLInputElement | null;
    const projectType = element.querySelector(
      "#project_type",
    ) as HTMLInputElement | null;
    const projectDescription = element.querySelector(
      "#project_description",
    ) as HTMLInputElement | null;
    const budgetMin = element.querySelector(
      "#budget_min",
    ) as HTMLInputElement | null;
    const budgetMax = element.querySelector(
      "#budget_max",
    ) as HTMLInputElement | null;

    if (!name || !email || !projectType || !budgetMin || !budgetMax) {
      console.error("Один или несколько элементов формы не найдены.");
      alert("Пожалуйста, заполните все поля формы.");
      return;
    }

    const formData = {
      name: name.value,
      email: email.value,
      phone: phone?.value,
      project_type: projectType.value,
      project_description: projectDescription?.value,
      budget_min: parseInt(budgetMin.value),
      budget_max: parseInt(budgetMax.value),
    };

    fetch(API_ROUTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Успех:", data);
        alert("Форма успешно отправлена!");
        element.reset();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при отправке формы.");
      });
  });
}
