// Get a WebGL Context
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  var shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var info = gl.getShaderInfoLog(shader);
    throw 'Could not compile WebGL program. \n\n' + info;
  }
  return shader;
}

// setup a GLSL program
const vertexShaderSource = 
  'attribute vec4 position;\n' +
  'void main() {\n' +
  '  gl_Position = position;\n' +
  '}\n';

const fragmentShaderSource =
  'void main() {\n' +
  '  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
  '}\n';

// Use the createShader function
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

const program = gl.createProgram();

// Attach shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.useProgram(program);

// look up where the vertex data needs to go.
const positionLocation = gl.getAttribLocation(program, 'a_position');

// Create a buffer and put a single clipspace rectangle in it
// (2 triangles)
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(
  gl.ARRAY_BUFFER,
  new Float32Array([
    -1.0,
    -1.0,
    1.0,
    -1.0,
    -1.0,
    1.0,
    -1.0,
    1.0,
    1.0,
    -1.0,
    1.0,
    1.0
  ]),
  gl.STATIC_DRAW
);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

// draw
gl.drawArrays(gl.TRIANGLES, 0, 6);
