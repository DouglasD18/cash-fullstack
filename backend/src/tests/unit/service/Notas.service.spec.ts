import { expect } from "chai";
import NotasFiscais from "../../mocks/Notas.mock";
import { NotaFiscalService } from "../../../nota-fiscal/service/NotaFiscal.service";

describe("NotaFiscalService ", () => {
  it("Should return an array.", async () => {
    const notas = await NotaFiscalService.getAllNotaFiscal();

    expect(notas).to.be.an('array');
  });

  it("Should return the right result.", async () => {
    const notas = await NotaFiscalService.getAllNotaFiscal();

    expect(notas).to.be.deep.equal(NotasFiscais);
  });
});
