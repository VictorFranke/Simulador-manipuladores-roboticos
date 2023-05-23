// Criando o ambiente do Three.js
let container = document.getElementById('animation');
let container_ = document.getElementById('animation_graf');

let scene = new THREE.Scene();
let scene_ = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
let camera_ = new THREE.PerspectiveCamera(75, container_.offsetWidth / container_.offsetHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
let renderer_ = new THREE.WebGLRenderer();

renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0xd1d9cf, 1);
renderer_.setSize(container_.offsetWidth, container_.offsetHeight);
renderer_.setClearColor(0xd1d9cf, 1);

container.appendChild(renderer.domElement);
container_.appendChild(renderer_.domElement);

const g = 9.81


//Salva os dados da equação no LocalStorage
function salvarValor() {
  //busca o valor das varáveis
  var l1 = document.getElementById('l1');
  var l2 = document.getElementById('l2');
  var m1 = document.getElementById('massa1');
  var m2 = document.getElementById('massa2');
  var a1 = document.getElementById("a1")
  var b1 = document.getElementById("b1")
  var b1 = document.getElementById("b1")
  var c1 = document.getElementById("c1")
  var d1 = document.getElementById("d1")
  var e1 = document.getElementById("e1")
  var f1 = document.getElementById("f1")
  var g1 = document.getElementById("g1")
  var a2 = document.getElementById("a2")
  var b2 = document.getElementById("b2")
  var c2 = document.getElementById("c2")
  var d2 = document.getElementById("d2")
  var e2 = document.getElementById("e2")
  var f2 = document.getElementById("f2")
  var g2 = document.getElementById("g2")
  //adiciona as variáveis no localStorage
  localStorage.setItem('l1_', l1.value);
  localStorage.setItem('l2_', l2.value);
  localStorage.setItem('m1_', m1.value);
  localStorage.setItem('m2_', m2.value);
  localStorage.setItem('a1_', a1.value);
  localStorage.setItem('b1_', b1.value);
  localStorage.setItem('c1_', c1.value);
  localStorage.setItem('d1_', d1.value);
  localStorage.setItem('e1_', e1.value);
  localStorage.setItem('f1_', f1.value);
  localStorage.setItem('g1_', g1.value);
  localStorage.setItem('a2_', a2.value);
  localStorage.setItem('b2_', b2.value);
  localStorage.setItem('c2_', c2.value);
  localStorage.setItem('d2_', d2.value);
  localStorage.setItem('e2_', e2.value);
  localStorage.setItem('f2_', f2.value);
  localStorage.setItem('g2_', g2.value);

}

function carregarValor() {
  //busca o valor das varáveis
  var l1 = document.getElementById('l1');
  var l2 = document.getElementById('l2');
  var m1 = document.getElementById('massa1');
  var m2 = document.getElementById('massa2');
  var a1 = document.getElementById("a1")
  var b1 = document.getElementById("b1")
  var b1 = document.getElementById("b1")
  var c1 = document.getElementById("c1")
  var d1 = document.getElementById("d1")
  var e1 = document.getElementById("e1")
  var f1 = document.getElementById("f1")
  var g1 = document.getElementById("g1")
  var a2 = document.getElementById("a2")
  var b2 = document.getElementById("b2")
  var c2 = document.getElementById("c2")
  var d2 = document.getElementById("d2")
  var e2 = document.getElementById("e2")
  var f2 = document.getElementById("f2")
  var g2 = document.getElementById("g2")
  //busca os valores das variáveis no localStorage
  var l1S = localStorage.getItem('l1_');
  var l2S = localStorage.getItem('l2_');
  var m1S = localStorage.getItem('m1_');
  var m2S = localStorage.getItem('m2_');
  var a1S = localStorage.getItem('a1_');
  var b1S = localStorage.getItem('b1_');
  var c1S = localStorage.getItem('c1_');
  var d1S = localStorage.getItem('d1_');
  var e1S = localStorage.getItem('e1_');
  var f1S = localStorage.getItem('f1_');
  var g1S = localStorage.getItem('g1_');
  var a2S = localStorage.getItem('a2_');
  var b2S = localStorage.getItem('b2_');
  var c2S = localStorage.getItem('c2_');
  var d2S = localStorage.getItem('d2_');
  var e2S = localStorage.getItem('e2_');
  var f2S = localStorage.getItem('f2_');
  var g2S = localStorage.getItem('g2_');

  //Adiciona os valores que estão no localStorage no texto HTML igualando os valores
  if (l1S) {
    l1.value = l1S;
  }
  if (l2S) {
    l2.value = l2S;
  }
  if (m1S) {
    m1.value = m1S;
  }
  if (m2S) {
    m2.value = m2S;
  }
  if (a1S) {
    a1.value = a1S;
  }
  if (a1S) {
    a1.value = a1S;
  }
  if (b1S) {
    b1.value = b1S;
  }
  if (c1S) {
    c1.value = c1S;
  }
  if (d1S) {
    d1.value = d1S;
  }
  if (e1S) {
    e1.value = e1S;
  }
  if (f1S) {
    f1.value = f1S;
  }
  if (g1S) {
    g1.value = g1S;
  }
  if (a2S) {
    a2.value = a2S;
  }
  if (b2S) {
    b2.value = b2S;
  }
  if (c2S) {
    c2.value = c2S;
  }
  if (d2S) {
    d2.value = d2S;
  }
  if (e2S) {
    e2.value = e2S;
  }
  if (f2S) {
    f2.value = f2S;
  }
  if (g2S) {
    g2.value = g2S;
  }
}


// Renderizando a cena do braço robotico
var i=0
function play_animation(){
  //Verifica se foram digitados valores em entrada
  if(document.getElementById("l1").value=="" || document.getElementById("l2").value=="" || document.getElementById("massa1").value=="" || document.getElementById("massa2").value==""){

  }
  else{
    i=i+1

    if(i>=2){
      window.alert("Reinicie antes de iniciar uma nova simulação")
    }

    else{
      // Definição das variáveis de comprimento dos braços robóticos

      let l1 = (Number(document.getElementById("l1").value))/10
      let l2 = (Number(document.getElementById("l2").value))/10
      let a1 = Number(document.getElementById("a1").value)
      let b1 = Number(document.getElementById("b1").value)
      let c1 = Number(document.getElementById("c1").value)
      let d1 = Number(document.getElementById("d1").value)
      let e1 = Number(document.getElementById("e1").value)
      let f1 = Number(document.getElementById("f1").value)
      let g1 = Number(document.getElementById("g1").value)
      let a2 = Number(document.getElementById("a2").value)
      let b2 = Number(document.getElementById("b2").value)
      let c2 = Number(document.getElementById("c2").value)
      let d2 = Number(document.getElementById("d2").value)
      let e2 = Number(document.getElementById("e2").value)
      let f2 = Number(document.getElementById("f2").value)
      let g2 = Number(document.getElementById("g2").value)

      //Cria os eixos de referência positivos
      const material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
      const axisHelperP = new THREE.AxesHelper(2*(l1+l2));
      axisHelperP.material = material;
      scene.add(axisHelperP);

      //Cria os eixos de referência negativos
      const material1 = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
      const axisHelperN = new THREE.AxesHelper(-2*(l1+l2));
      axisHelperN.material = material1;
      scene.add(axisHelperN);


      // Criando a geometria da barra
      const barGeometry = new THREE.CylinderGeometry((l1/2), (l1/2), 0.2, 2);
      const barGeometry1 = new THREE.CylinderGeometry((l2/2), (l2/2), 0.2, 2);
      const barMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      const bar1 = new THREE.Mesh(barGeometry1, barMaterial);

      // Criando as geometrias das rotulas
      const sphereGeometry = new THREE.SphereGeometry(0.1, 30, 30);
      const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
      const sphereMaterial1 = new THREE.MeshBasicMaterial({color: 0x000000});
      const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
      const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
      const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial1);

      //Cria os Eixos horizontais das rotulas
      const geometryHorizontal = new THREE.BoxGeometry(l2, 0.02, 0.02); // largura, altura e profundidade
      geometryHorizontal.rotateY(Math.PI); // gira a geometria para ficar horizontal
      const material_1 = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // define o material da linha
      const lineHorizontal1 = new THREE.Mesh(geometryHorizontal, material_1); // cria o mesh da linha

      // Adiciona o eixo móvel à cena
      scene.add(lineHorizontal1);

      // Posicionando as rotulas
      sphere1.position.set(0, 0, 0);
      sphere2.position.set(l1*Math.cos(0), l1*Math.sin(0), 0);
      sphere3.position.set(l2*Math.cos(0), l2*Math.sin(0), 0);

      // Adicionando as rotulas e a barra na cena
      scene.add(sphere1);
      scene.add(sphere2);
      scene.add(sphere3);
      scene.add(bar);
      scene.add(bar1);

      // Posicionando a câmera
      camera.position.z = 1.5*(l1+l2);

      let t=0

        function animate() {
          if (t > 10.5) {
            t = 0; // reinicia a variável t para 0
          }
          
          t += 0.02; //atualiza o tempo em 0.01 a cada frame da animação

          //Calcula as variáveis do movimento:
          let teta1 = (a1*t**6+b1*t**5+c1*t**4+d1*t**3+e1*t**2+f1*t+g1)*((Math.PI)/180)
          let teta2 = (a2*t**6+b2*t**5+c2*t**4+d2*t**3+e2*t**2+f2*t+g2)*((Math.PI)/180)
          let teta1_g = teta1*(180/Math.PI)
          let teta2_g = teta2*(180/Math.PI)
          
          let omega1 = (6*a1*t**5+5*b1*t**4+4*c1*t**3+3*d1*t**2+2*e1*t+f1)*((Math.PI)/180)
          let omega2 = (6*a2*t**5+5*b2*t**4+4*c2*t**3+3*d2*t**2+2*e2*t+f2)*((Math.PI)/180)
          let omega1_g = omega1*(180/Math.PI)
          let omega2_g = omega2*(180/Math.PI)

          let alfa1 = (30*a1*t**4+20*b1*t**3+12*c1*t**2+6*d1*t+2*e1)*((Math.PI)/180)
          let alfa2 = (30*a2*t**4+20*b2*t**3+12*c2*t**2+6*d2*t+2*e2)*((Math.PI)/180)
          let alfa1_g = alfa1*(180/Math.PI)
          let alfa2_g = alfa2*(180/Math.PI)

          //Atualiza os valores das variáveis em tela
          document.getElementById("angulo1").innerHTML = `Ângulo θ₁ = ${teta1_g.toFixed(2)}°`;
          document.getElementById("angulo2").innerHTML = `Ângulo θ₂ = ${teta2_g.toFixed(2)}°`;
          document.getElementById("vel_angulo2").innerHTML = `Velocidade w₂ = ${omega2_g.toFixed(2)}°`;
          document.getElementById("ace_angulo2").innerHTML = `Aceleração w₂ = ${alfa2_g.toFixed(2)}°`;
          document.getElementById("time").innerHTML = `Tempo t = ${t.toFixed(2)} s`; 
          
          requestAnimationFrame(animate);
        
          // Atualizando a posição da segunda rotula
          sphere2.position.set(l1*Math.cos(teta1), l1*Math.sin(teta1), 0);
        
          // Atualizando a posição da terceira rotula
          sphere3.position.set(l1*Math.cos(teta1)+l2*Math.cos(teta2), l1*Math.sin(teta1)+l2*Math.sin(teta2), 0);
        
          // Atualiza a posição dos eixos a rotula 02
          lineHorizontal1.position.set(sphere2.position.x, sphere2.position.y, sphere2.position.z); // posiciona a linha no centro da esfera

          // Atualizando a posição e orientação da barra
          const vector = new THREE.Vector3();
          vector.subVectors(sphere2.position, sphere1.position);
          bar.position.copy(vector).multiplyScalar(0.5).add(sphere1.position);
          bar.lookAt(sphere2.position);
        
          // Atualizando a posição e orientação da barra
          const vector1 = new THREE.Vector3();
          vector1.subVectors(sphere3.position, sphere2.position);
          bar1.position.copy(vector1).multiplyScalar(0.5).add(sphere2.position);
          bar1.lookAt(sphere3.position);
        
          renderer.render(scene, camera);
        }
        animate();
    }
  }
}


// Renderizando a cena do gráfico
// inicializa a variável t fora da função
let t = 0; 
function play_grafic(){
  //Verifica se foram digitados valores em entrada
  if(document.getElementById("l1").value=="" || document.getElementById("l2").value=="" || document.getElementById("massa1").value=="" || document.getElementById("massa2").value==""){
    window.alert("Insira Dados para iniciar a simulação")
  }
  else{

    // Definição das variáveis de comprimento dos braços robóticos
    let l1 = (Number(document.getElementById("l1").value))/100
    let l2 = (Number(document.getElementById("l2").value))/100
    let m1 = (Number(document.getElementById("massa1").value))
    let m2 = (Number(document.getElementById("massa2").value))
    let a1 = Number(document.getElementById("a1").value)
    let b1 = Number(document.getElementById("b1").value)
    let c1 = Number(document.getElementById("c1").value)
    let d1 = Number(document.getElementById("d1").value)
    let e1 = Number(document.getElementById("e1").value)
    let f1 = Number(document.getElementById("f1").value)
    let g1 = Number(document.getElementById("g1").value)
    let a2 = Number(document.getElementById("a2").value)
    let b2 = Number(document.getElementById("b2").value)
    let c2 = Number(document.getElementById("c2").value)
    let d2 = Number(document.getElementById("d2").value)
    let e2 = Number(document.getElementById("e2").value)
    let f2 = Number(document.getElementById("f2").value)
    let g2 = Number(document.getElementById("g2").value)

    //Cria os eixos de referência positivos
    const material = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
    const axisHelperP = new THREE.AxesHelper(13);
    const axisHelperV = new THREE.AxesHelper(-13);
    axisHelperP.material = material;
    axisHelperV.material = material;
    scene_.add(axisHelperP);
    scene_.add(axisHelperV);


    // Criando as geometrias dos pontos de velocidade, aceleração, força e torque
    const sphereGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.1);
    const sphereMaterial1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const sphereMaterial2 = new THREE.MeshBasicMaterial({color: 0xffff00});
    const sphereMaterial3 = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const sphereMaterial4 = new THREE.MeshBasicMaterial({color: 0xff0000});
    const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
    const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
    const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial3);
    const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial4);

    scene_.add(sphere1);
    scene_.add(sphere2);
    scene_.add(sphere3);
    scene_.add(sphere4);
        
    camera_.position.z = 5;
    camera_.position.y = 0;
    camera_.position.x = 6;
    
    let objects = []; // lista para armazenar os objetos criados

    function animate() {
      requestAnimationFrame(animate);
      
      if (t > 10.5) {
        // Remover todos os objetos da cena
        for (let i = 0; i < objects.length; i++) {
          scene_.remove(objects[i]);
        }
        // Esvaziar a lista de objetos
        objects = [];
        t = 0; // reinicia a variável t para 0
      }

      t += 0.02; // atualiza o tempo em 0.02 a cada frame da animação

      //Calcula as variáveis angulares:
      let teta1 = (a1*t**6+b1*t**5+c1*t**4+d1*t**3+e1*t**2+f1*t+g1)*((Math.PI)/180)
      let teta2 = (a2*t**6+b2*t**5+c2*t**4+d2*t**3+e2*t**2+f2*t+g2)*((Math.PI)/180)

      let omega1 = (6*a1*t**5+5*b1*t**4+4*c1*t**3+3*d1*t**2+2*e1*t+f1)*((Math.PI)/180)
      let omega2 = (6*a2*t**5+5*b2*t**4+4*c2*t**3+3*d2*t**2+2*e2*t+f2)*((Math.PI)/180)

      let alfa1 = (30*a1*t**4+20*b1*t**3+12*c1*t**2+6*d1*t+2*e1)*((Math.PI)/180)
      let alfa2 = (30*a2*t**4+20*b2*t**3+12*c2*t**2+6*d2*t+2*e2)*((Math.PI)/180)

      // Define as variáveis do ponto C
      let Vcx = -(l1*Math.sin(teta1)*omega1+l2*Math.sin(teta2)*omega2)
      let Vcy = (l1*Math.cos(teta1)*omega1+l2*Math.cos(teta2)*omega2)
      let Acx = -l1*(Math.cos(teta1)*(omega1**2)+Math.sin(teta1)*alfa1)-l2*(Math.cos(teta2)*(omega2**2)+Math.sin(teta2)*alfa2)
      let Acy = l1*(Math.cos(teta1)*alfa1-Math.sin(teta1)*(omega1**2))+l2*(Math.cos(teta2)*alfa2-Math.sin(teta2)*(omega2**2))

      //Define as variáveis em relação ao centro de gravidade da barra 02
      let Acx_cg2 = -l1*(Math.cos(teta1)*(omega1**2)+Math.sin(teta1)*alfa1)-(l2/2)*(Math.cos(teta2)*(omega2**2)+Math.sin(teta2)*alfa2)
      let Acy_cg2 = l1*(Math.cos(teta1)*alfa1-Math.sin(teta1)*(omega1**2))+(l2/2)*(Math.cos(teta2)*alfa2-Math.sin(teta2)*(omega2**2))

      //Define as variáveis em ralação ao centro de gravidade da barra 01
      let Abx_cg1 = -(l1/2)*(Math.cos(teta1)*(omega1**2)+Math.sin(teta1)*alfa1)
      let Aby_cg1 = (l1/2)*(Math.cos(teta1)*alfa1-Math.sin(teta1)*(omega1**2))

      //Define as reação de apoio da barra 02
      let Rbx = m2*Acx_cg2
      let Rby = m2*(Acy_cg2+9)
      let Tb = (1/2)*(m2*(l2**2)*alfa2+Rby*Math.cos(teta2)*l2-Rbx*Math.sin(teta2)*l2)
      
      //Define as reações de apoio na barra 01
      let Rax = m1*Abx_cg1+Rbx
      let Ray = m1*(Aby_cg1+g)+Rby
      let Ta = ((m1*(l1**2)*alfa1)/2)+Tb+((m1*g*Math.cos(teta1)*l1)/2)+Rby*Math.cos(teta1)*l1+Rbx*Math.sin(teta1)*l1

      //Atualiza os valores da valocidade e aceleração em tela
      document.getElementById("vel").innerHTML = `V= [${Vcx.toFixed(2)} i ;  ${Vcy.toFixed(2)} j ]  m/s`;
      document.getElementById("acel").innerHTML = `A= [${Acx.toFixed(2)} i ;  ${Acy.toFixed(2)} j ] m/s²`;

      //Atualiza os valores das reações de apoio em tela
      document.getElementById("Rbx").innerHTML = `Reação Horizontal em B: ${Rbx.toFixed(2)} N`;
      document.getElementById("Rby").innerHTML = `Reação Vertical em B: ${Rby.toFixed(2)} N`;
      document.getElementById("T2").innerHTML = `Torque do motor em B: ${Tb.toFixed(2)} Nm`;
      document.getElementById("Rax").innerHTML = `Reação Horizontal em A: ${Rax.toFixed(2)} N`;
      document.getElementById("Ray").innerHTML = `Reação Vertical em A: ${Ray.toFixed(2)} N`;
      document.getElementById("T1").innerHTML = `Torque do motor em A: ${Ta.toFixed(2)} Nm`;

      // Criando as geometrias dos pontos de velocidade, aceleração, força e torque
      const sphereGeometry = new THREE.SphereGeometry(0.1, 0.1, 0.1);
      const sphereMaterial1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
      const sphereMaterial2 = new THREE.MeshBasicMaterial({color: 0xffff00});
      const sphereMaterial3 = new THREE.MeshBasicMaterial({color: 0x0000ff});
      const sphereMaterial4 = new THREE.MeshBasicMaterial({color: 0xff0000});
      const sphereMaterial5 = new THREE.MeshBasicMaterial({color: 0xff7700});
      const sphereMaterial6 = new THREE.MeshBasicMaterial({color: 0xff00f2});
      const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1);
      const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
      const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial3);
      const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial4);
      const sphere5 = new THREE.Mesh(sphereGeometry, sphereMaterial5);
      const sphere6 = new THREE.Mesh(sphereGeometry, sphereMaterial6);

      objects.push(sphere1); // adiciona o objeto na lista de objetos
      objects.push(sphere2);
      objects.push(sphere3);
      objects.push(sphere4);
      objects.push(sphere5);
      objects.push(sphere6);

      // Atualizando a posição dos pontos em cena
      sphere1.position.set(t, 10*Rbx, 0);
      sphere2.position.set(t, Rby/10, 0);
      sphere3.position.set(t, Tb, 0);
      sphere4.position.set(t, 10*Rax, 0);
      sphere5.position.set(t, Ray/10, 0);
      sphere6.position.set(t, Ta, 0);

      scene_.add(sphere1);
      scene_.add(sphere2);
      scene_.add(sphere3);
      scene_.add(sphere4);
      scene_.add(sphere5);
      scene_.add(sphere6);

      renderer_.render(scene_, camera_);
    }
    animate();
  }
}


// Pausa a animação utilizando o window.alert
function botao_pause(){
  window.alert("Retomar animação")
}
