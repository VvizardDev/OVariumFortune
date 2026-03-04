document.addEventListener("DOMContentLoaded", function() {

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const title = document.createElement("h2");
  title.textContent = "Contents";
  sidebar.appendChild(title);

  const toc = document.createElement("ul");

  const headings = document.querySelectorAll("h1, h2, h3, h4, h5");

  headings.forEach((heading, index) => {

    const id = "section-" + index;
    heading.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#" + id;
    a.textContent = heading.textContent;

    const level = heading.tagName.substring(1);
    li.classList.add("level-" + level);

    li.appendChild(a);
    toc.appendChild(li);

  });

  sidebar.appendChild(toc);

  document.body.appendChild(sidebar);

  /* mobile toggle */

  const button = document.createElement("button");
  button.id = "sidebar-toggle";
  button.textContent = "☰";

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

});
