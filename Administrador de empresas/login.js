const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const submitLogin = document.getElementById('iniciarSesion');

function iniciarSesion(event) {
    event.preventDefault(); // Previene la acción predeterminada del formulario

    if (usuario.value.trim() === '' || contraseña.value.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Todos los campos son obligatorios'
        });
        return;
    }

    const formData = new FormData();
    formData.append('usuario', usuario.value.trim());
    formData.append('contraseña', contraseña.value.trim());

    fetch('http://localhost/administrador%20de%20empresas/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: data.message
            }).then(() => {
                window.location.href = 'admin.html'; // Redirecciona a la página principal después de iniciar sesión
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error en el inicio de sesión',
            text: 'Hubo un error en el inicio de sesión. Inténtalo de nuevo.'
        });
    });
}

if (submitLogin) {
    submitLogin.addEventListener('click', iniciarSesion);
}
