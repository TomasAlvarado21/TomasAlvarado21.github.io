import qrcode

# Datos que quieres codificar (el enlace)
data = "https://tomasalvarado21.github.io/luna"

# Crear el objeto QRCode
qr = qrcode.QRCode(
    version=1,  # Define el tamaño del código (1-40)
    error_correction=qrcode.constants.ERROR_CORRECT_L, # Nivel de corrección de errores
    box_size=10, # Tamaño de cada "cuadrado" del código
    border=1, # Ancho del borde alrededor del código
)

# Añadir los datos al código QR
qr.add_data(data)
qr.make(fit=True) # Ajustar el tamaño para que quepa todo

# Crear la imagen
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen
img.save("Luna_black.png")