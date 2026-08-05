# English Vocabulary App

Aplicación web para aprender vocabulario en inglés mediante ejercicios interactivos.

El objetivo es que el usuario no solo memorice palabras, sino que practique:
- significado
- escritura
- uso en frases
- comprensión y producción del idioma

Construida con **React + Vite**.

---

# Tecnologías utilizadas

- React
- Vite
- React Router
- CSS puro
- JavaScript ES6+

---

# Estructura del proyecto


src
│
├── components
│ ├── WordCard.jsx
│ ├── WordGame.jsx
│ └── SentenceGame.jsx
│
├── pages
│ └── Study.jsx
│
├── data
│ └── words.js
│
├── App.jsx
├── main.jsx
└── index.css


---

# Funcionalidades implementadas

## Sistema de estudio

- Mostrar palabras de vocabulario.
- Flujo progresivo:
  1. Mostrar palabra en español.
  2. Usuario intenta escribir la palabra en inglés.
  3. Si es correcta pasa al ejercicio de frase.
  4. Usuario completa la frase en inglés.
  5. Avanza automáticamente a la siguiente palabra.

---

# Ejercicio de palabras

## Completar palabra letra por letra

Ejemplo:


Aceptar

[ ][ ][ ][ ][ ][ ]

accept


Características:

✅ Casilleros individuales por letra.

✅ Avance automático al escribir.

✅ El cursor pasa automáticamente a la siguiente letra.

✅ Soporte de teclado.

✅ Enter comprueba automáticamente.

✅ Backspace:
- borra la letra actual.
- vuelve al casillero anterior si está vacío.

---

# Sistema de errores

La palabra tiene contador de intentos.

Ejemplo:
Intentos: 2/5


Cuando falla:


❌ Incorrecto, intenta otra vez


Después de varios intentos:

- Se puede mostrar la respuesta.
- El usuario puede seguir completando la palabra.
- La ayuda no salta el ejercicio.

---

#  Ayuda de palabra

El usuario puede pedir:


Descubrir palabra


La aplicación muestra:


La palabra es:

ACCEPT


Pero mantiene el ejercicio activo.

El usuario debe completar correctamente para continuar.

---

#  Ejercicio de frases

Después de completar la palabra:

Ejemplo:

Español:


Ella aceptó la oferta.


Usuario completa:


She accepted the offer.


Características:

✅ Input de frase completo.

✅ Enter para comprobar.

✅ Auto enfoque del campo.

✅ Mensaje de correcto.

✅ Mensaje de error.

---

# Sistema de pistas para frases

Cuando el usuario falla:

## Primer error

Muestra cantidad de letras:

## Segundo error

Revela palabras correctas:

Ejemplo:


SHE ______ ___ _____


---

## Tercer error

Muestra la respuesta completa:


SHE ACCEPTED THE OFFER


---

# Orden aleatorio de palabras

La lista de vocabulario se mezcla automáticamente.

Ejemplo:

Lista original:


accept
add
make
take
go


Nueva sesión:


make
accept
go
take
add

Cada inicio puede tener un orden diferente.

---

# Diseño responsive

La interfaz está preparada para:

✅ Desktop

✅ Tablets

✅ Móviles


Características:

- Tarjetas adaptables.
- Letras dinámicas.
- Palabras largas sin romper pantalla.
- Inputs ajustables.

---

# Diseño visual

Incluye:

- Tarjetas con sombras.
- Animaciones de entrada.
- Botones modernos.
- Estados:
  - correcto
  - error
  - ayuda

---

# Próximas mejoras

## Sistema de progreso

- Cantidad de palabras aprendidas.
- Porcentaje de avance.
- Racha diaria.

---

## Sistema inteligente

- Guardar palabras difíciles.
- Repetición espaciada.
- Priorizar errores.

---

## Usuario

- Login.
- Perfil.
- Estadísticas personales.

---

## Base de datos

Migrar palabras desde archivos locales a:

- Firebase
- Supabase
- API propia

---

# Estado actual

La aplicación ya cuenta con un flujo completo de aprendizaje:


Español
↓
Completar palabra
↓
Completar frase
↓
Siguiente palabra


Con validaciones, ayudas y soporte de teclado.