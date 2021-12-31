const login = async () => {
  setCookie("idDiagrama", "", 0);
  const user = document.getElementsByName("user")[0].value;
  const password = document.getElementsByName("password")[0].value;

  const data = { username: user, password: password };

  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status == 201) {
    let algo = await res.json();
    token = algo.token;
    setCookie("token", token, 1); //httponlycookies
    let a = document.cookie;
    console.log("Success");
    location.href = "./diagramasEstudiante.html";
  } else alert("Error en el username o password");
};

const miPerfil = async () => {
  token = getCookie("token");

  const res = await fetch("http://localhost:3000/auth/miPerfil", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": "Bearer " + token,
    },
  });
  if (!res.ok) setCookie("token", "", 0);
  return await res.json();
};
const actualizarUsuario = async (id, act) => {
  token = getCookie("token");
  console.log(JSON.stringify(act));
  const res = await fetch("http://localhost:3000/user/" + id, {
    method: "PUT",
    body: JSON.stringify(act),
    headers: {
      "Content-Type": "application/json",
      "x-access-token": "Bearer " + token,
    },
  });
  return await res.json();
};

const guardarClaseMongo = async (clase) => {
  const res = await fetch("http://localhost:3000/class", {
    method: "POST",
    body: JSON.stringify(clase), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
  let claseRes = await res.json();

  clase._id = claseRes._id;
  clase.grupoNombre.id = claseRes.grupoNombre;
  clase.grupoAtributos.id = claseRes.grupoAtributos;
  clase.grupoMetodos.id = claseRes.grupoMetodos;

  if (res.status !== 200) {
    alert("Error en el servidor");
    return false;
  }
};

const guardarUnionMongo = async (union) => {
  const res = await fetch("http://localhost:3000/union", {
    method: "POST",
    body: JSON.stringify({
      claseOrigen: union.origen._id,
      claseFin: union.destino._id,
      tipoUnion: union.herencia,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let unionRes = await res.json();

  union._id = unionRes._id;

  if (res.status == 500) alert("Error en el servidor");
};

const actualizarClasesMongo = async (clase) => {
  const grupoNombre = clase.grupoNombre;
  const grupoAtributos = clase.grupoAtributos;
  const grupoMetodos = clase.grupoMetodos;

  let id = grupoNombre._id;
  actualizarGrupo(
    {
      x: grupoNombre.x,
      y: grupoNombre.y,
      alto: grupoNombre.alto,
      ancho: grupoNombre.ancho,
      contenido: [grupoNombre.nombre],
    },
    id
  );
  //atributos
  id = grupoAtributos._id;
  actualizarGrupo(
    {
      x: grupoAtributos.x,
      y: grupoAtributos.y,
      alto: grupoAtributos.alto,
      ancho: grupoAtributos.ancho,
      contenido: grupoAtributos.atributos,
    },
    id
  );

  id = grupoMetodos._id;
  actualizarGrupo(
    {
      x: grupoMetodos.x,
      y: grupoMetodos.y,
      alto: grupoMetodos.alto,
      ancho: grupoMetodos.ancho,
      contenido: grupoMetodos.metodos,
    },
    id
  );
};

const actualizarGrupo = async (grupo, id) => {
  const res = await fetch("http://localhost:3000/group/" + id, {
    method: "PUT",
    body: JSON.stringify(grupo), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const crearDiagrama = async (clases, uniones, nombre) => {
  const res = await fetch("http://localhost:3000/diagram", {
    method: "POST",
    body: JSON.stringify({
      clases: clases,
      uniones: uniones,
      nombreDiagrama: nombre,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let diagramaRes = await res.json();

  console.log(diagramaRes);
  if (res.status == 500) {
    alert("Error en el servidor");
    return;
  }
  return diagramaRes;
};

const getDiagram = async (id) => {
  const res = await fetch("http://localhost:3000/diagram/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
