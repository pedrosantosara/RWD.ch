const alterValue = (id) => {
  const button = document.getElementById(id);
  const value = document.getElementById(id).value;

  if (value == 1) {
    button.style.backgroundColor = "#f50000";
    button.style.color = "white";
    button.style.borderColor = "#f50000";
  } else if (value == 0) {
    button.style.backgroundColor = "white";
    button.style.color = "#f50000";
    button.style.borderColor = "#c2c2c2";
  }

  if (value == 0) {
    button.setAttribute("value", 1);
  } else if (value == 1) {
    button.setAttribute("value", 0);
  }
};
