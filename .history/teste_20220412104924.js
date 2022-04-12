function impressora(documento) {
  this.documento = documento;
}

impressora.prototype.imprimir = function () {
  console.log(this.documento);
};

const pdf = new impressora("Documento para impressão.");
pdf.imprimir();
