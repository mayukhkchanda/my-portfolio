varying vec3 p;
varying vec2 vertexUV;
uniform sampler2D u_globe;
varying vec3 vertexNormal;

void main() {
    // gl_FragColor = vec4(p, 1.0);
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
    vec3 tint = vec3(0, 0, 0.5);
    gl_FragColor = vec4(atmosphere + texture2D(u_globe, vertexUV).xyz, 1.0);
}