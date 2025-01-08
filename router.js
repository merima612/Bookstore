const routes = {
    '/login': '<h1>Login Page</h1><p><a href="/forma" data-link>Go to Register</a> | <a href="/forgot-password" data-link>Forgot Password?</a></p>',
    '/forma': '<h1>Register Page</h1><p><a href="/login" data-link>Back to Login</a></p>',
    '/forgot-password': '<h1>Forgot Password Page</h1><p><a href="/login" data-link>Back to Login</a></p>',
};

function router() {
    const path = window.location.pathname;
    const content = routes[path] || '<h1>404 - Page Not Found</h1>';
    document.getElementById('app').innerHTML = content;

    // Ažuriranje breadcrumbs
    const breadcrumbContainer = document.getElementById('breadcrumbs');
    breadcrumbContainer.innerHTML = `Current Page: ${path}`;
}

function handleNavigation(e) {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        window.history.pushState({}, '', e.target.href);
        router();
    }
}

window.addEventListener('popstate', router);
document.addEventListener('click', handleNavigation);
router();
