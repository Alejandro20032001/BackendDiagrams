const login = async () => {
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
    setCookie("token", token, 1);//httponlycookies
    let a = document.cookie;
    console.log("Success");
    location.href = "./index.html";
  }
};

const miPerfil = async () => {
  token = getCookie("token");
  console.log(token);
  const res = await fetch("http://localhost:3000/auth/miPerfil", {
    method: "GET",
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
  console.log(union.origen)
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

  union.id = unionRes._id;

  if (res.status == 500) alert("Error en el servidor");
};

const actualizarClasesMongo = async (clase) => {
  console.log(clase._id);
  const grupoNombre = clase.grupoNombre;
  const grupoAtributos = clase.grupoAtributos;
  const grupoMetodos = clase.grupoMetodos;

  let id = grupoNombre.id;
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
  id = grupoAtributos.id;
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

  id = grupoMetodos.id;
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
