let navbar = ()=>{
    return `<header class="header">
    <div class="header_container">
        <a href="index.html">
            <img src="https://mailtrap.io/wp-content/uploads/2021/04/mailtrap-new-logo.svg" alt="logo">
        </a>
        <nav class="header_nav">
            <div class="menu_nav">
                <div>
                    <a class="menu_nav_bloc" id="email_testing" href="#">
                        Email Testing
                    </a>
                </div>
                <div>
                    <a class="menu_nav_bloc" id="email_api" href="#">
                        Email API
                    </a>
                </div>
                <div>
                    <a class="menu_nav_bloc" id="pricing" href="#">
                        Pricing
                    </a>
                </div>
                <div>
                    <a class="menu_nav_bloc" id="resources" href="#">
                        Resources
                    </a>
                </div>
                <div>
                    <a class="menu_nav_bloc button" id="login" href="login.html">
                        Log In
                    </a>
                </div>
                <div>
                    <a class="menu_nav_bloc button shadow" id="signup" href="signup.html">
                        Sign up
                    </a>
                </div>
            </div>
        </nav>
    </div>
</header>`
}
export default navbar