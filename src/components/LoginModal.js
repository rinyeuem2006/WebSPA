export function LoginModal() {
  return `
     <div id="login-modal" class="modal-content">
        <button class="close-btn" data-action="close-modal">&times;</button>
        <h2>Đăng nhập</h2>
          <div class="Login-container" id="Login-container">
            <form class="LoginForm" action="" method="POST">
              <div class="Login">
                <div class="user">
                  <input type="text" id="login-username" required>
                  <label for="login-username">Username</label>
                </div>
                <div class="pass">
                  <input type="password" id="login-password" required>
                  <label for="login-password">Password</label>
                </div>
              </div>
              <div class="Login-function">
                <div>
                  <input type="checkbox" id="login-remember" name="remember" value="true">
                  <label for="login-remember">Remember me</label>
                </div>
                <div>
                  <a id="Forget" href="#">Forget Password</a>
                </div>
              </div>
              <div class="Login-button">
                <button type="submit" id="btn">Login</button>
              </div>
            </form>
            <div class="signup">
              Don't have an Account? <a href="#" id="toggle-link-login" data-action="open-modal" data-target="signup-modal">Sign up</a>
            </div>
          </div>
      </div>
    `;
}
