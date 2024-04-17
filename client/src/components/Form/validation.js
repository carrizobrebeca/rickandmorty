const validation = (data) => {
    let errors = {};
    
    if (!data.email) {
      errors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "No tiene formato mail";
    } else if (data.email.length > 35) {
      errors.email = "El email no debe tener más de 35 caracteres";
    }
  
    if (!data.password) {
      errors.password = "La contraseña es requerido";
    } else if (!/\d/.test(data.password)) {
      errors.password = "La Contraseña debe tener al menos un número";
    } else if (data.password.length < 6 || data.password.length > 10) {
      errors.password = "La Contraseña debe tener entre 6 y 10 caracteres";
    }
  
    return errors;
  };
  
  export default validation;