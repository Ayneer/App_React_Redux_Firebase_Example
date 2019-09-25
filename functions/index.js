const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const crearNotificacion = (notificacion) => {
    return admin.firestore().collection('notificaciones').add(notificacion)
        .then(doc => {
            console.log('Notificacion creada!', doc);
        });
};

const crearUsuario = (usuario, id) => {
    return admin.auth().createUser({
        uid: id,
        email: usuario.correo,
        password: usuario.contraseña
    }).then(doc => {
        console.log('Usuario Creado!', doc);
    }).catch(function (error) {
        console.log('Error creando un nuevo ususario (Auth):', error);
    });
}

exports.proyectoCreado = functions.firestore
    .document('proyectos/{proyectoID}')
    .onCreate(doc => {
        const proyecto = doc.data();
        const notificacion = {
            mensaje: "Se ha creado un nuuevo proyecto.",
            cliente: `${proyecto.correoCliente}`,
            hora: admin.firestore.FieldValue.serverTimestamp(),
            id: `${doc.id}`
        }
        return crearNotificacion(notificacion);
    });

exports.clienteCreado = functions.firestore
    .document('clientes/{clienteID}')
    .onCreate(doc => {
        const cliente = doc.data();
        const id = doc.id;
        return crearUsuario(cliente, id);
    })
