document.addEventListener("DOMContentLoaded", () => {
  const btnMonthly = document.getElementById("btn-monthly");
  const btnYearly = document.getElementById("btn-yearly");
  const monthlyPlans = document.getElementById("monthly-plans");
  const yearlyPlans = document.getElementById("yearly-plans");

  const setPlan = (monthly) => {
    btnMonthly?.classList.toggle("active", monthly);
    btnYearly?.classList.toggle("active", !monthly);
    monthlyPlans?.classList.toggle("active", monthly);
    yearlyPlans?.classList.toggle("active", !monthly);
  };

  btnMonthly?.addEventListener("click", () => setPlan(true));
  btnYearly?.addEventListener("click", () => setPlan(false));
});

