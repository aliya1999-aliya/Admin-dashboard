
const sidebar=document.getElementById("sidebar");
const contentArea=document.getElementById("contentArea");

/* PAGES CONTENT */
const pages = {
  dashboard: `
    <div class="stats">
      <div class="card gradient1"><h4>Total Users</h4><p class="big">12,450</p></div>
      <div class="card gradient2"><h4>Revenue</h4><p class="big">$87,900</p></div>
      <div class="card gradient3"><h4>Orders</h4><p class="big">4,250</p></div>
      <div class="card gradient4"><h4>Growth</h4><p class="big">+18%</p></div>
    </div>
    <div class="charts">
      <canvas id="salesChart"></canvas>
      <canvas id="usersChart"></canvas>
      <canvas id="pieChart"></canvas>
    </div>
    <div class="activity">
      <h3>Recent Activity</h3>
      <ul>
        <li>⭐ New user registered — <span>2 mins ago</span></li>
        <li>💳 Payment received — <span>10 mins ago</span></li>
        <li>📦 Order shipped — <span>25 mins ago</span></li>
      </ul>
    </div>
  `,
  users: `
    <h2>Users Management</h2>
    <div class="table-section">
      <h3>All Users</h3>
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>John Doe</td><td>john@mail.com</td><td>Admin</td><td><span class="badge green">Active</span></td></tr>
          <tr><td>Jane Smith</td><td>jane@mail.com</td><td>User</td><td><span class="badge yellow">Pending</span></td></tr>
          <tr><td>Bob Brown</td><td>bob@mail.com</td><td>Moderator</td><td><span class="badge red">Blocked</span></td></tr>
        </tbody>
      </table>
    </div>
  `,
  analytics: `
    <h2>Analytics</h2>
    <div class="stats">
      <div class="card gradient1"><h4>Visitors</h4><p class="big">25,400</p></div>
      <div class="card gradient2"><h4>Page Views</h4><p class="big">52,300</p></div>
      <div class="card gradient3"><h4>Bounce Rate</h4><p class="big">33%</p></div>
      <div class="card gradient4"><h4>Conversion</h4><p class="big">12%</p></div>
    </div>
    <div class="charts">
      <canvas id="analyticsChart"></canvas>
    </div>
  `,
  sales: `
    <h2>Sales</h2>
    <div class="stats">
      <div class="card gradient1"><h4>Revenue</h4><p class="big">$124,500</p></div>
      <div class="card gradient2"><h4>Orders</h4><p class="big">5,230</p></div>
      <div class="card gradient3"><h4>Refunds</h4><p class="big">25</p></div>
      <div class="card gradient4"><h4>Profit</h4><p class="big">$98,400</p></div>
    </div>
    <div class="table-section">
      <h3>Recent Orders</h3>
      <table>
        <thead><tr><th>Order ID</th><th>Customer</th><th>Status</th><th>Amount</th></tr></thead>
        <tbody>
          <tr><td>#101</td><td>Jane Smith</td><td><span class="badge green">Delivered</span></td><td>$120</td></tr>
          <tr><td>#102</td><td>John Doe</td><td><span class="badge yellow">Pending</span></td><td>$250</td></tr>
          <tr><td>#103</td><td>Bob Brown</td><td><span class="badge red">Cancelled</span></td><td>$75</td></tr>
        </tbody>
      </table>
    </div>
  `,
  settings: `
    <h2>Settings</h2>
    <div class="table-section">
      <h3>Profile Settings</h3>
      <label>Name: <input type="text" value="Admin"></label><br><br>
      <label>Email: <input type="email" value="admin@mail.com"></label><br><br>
      <label>Password: <input type="password" value="********"></label><br><br>
      <button style="padding:10px 20px;border-radius:15px;background:var(--gradient1);border:none;color:#fff;cursor:pointer;">Save Changes</button>
    </div>
  `
};

/* LOAD PAGE */
function loadPage(page){
  contentArea.innerHTML = pages[page];
}
loadPage("dashboard");

/* SIDEBAR CLICK */
document.querySelectorAll(".menu li").forEach(li=>{
  li.onclick=()=>{
    document.querySelector(".menu .active")?.classList.remove("active");
    li.classList.add("active");
    loadPage(li.dataset.page);
    localStorage.setItem("activePage",li.dataset.page);
  };
});

/* LOGOUT */
document.getElementById("logoutBtn").onclick=()=>{
  alert("Logout clicked!");
};

/* RESTORE LAST PAGE */
const lastPage=localStorage.getItem("activePage")||"dashboard";
document.querySelector(`.menu li[data-page="${lastPage}"]`)?.click();

/* THEME TOGGLE */
document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
};

/* SIDEBAR TOGGLE */
document.getElementById("sidebarToggle").onclick=()=>{
  sidebar.classList.toggle("collapsed");
  localStorage.setItem("sidebar",sidebar.classList.contains("collapsed")?"collapsed":"expanded");
};
