import { expect } from "chai";
import * as sinon from 'sinon';
import NotasFiscais from "../../mocks/Notas.mock";
import { NotaFiscalService } from "../../../nota-fiscal/service/NotaFiscal.service";
import { NextFunction, Request, Response } from "express";
import { NotaFiscalController } from '../../../nota-fiscal/controller/NotaFiscal.controller';

describe("NotaFiscalController", () => {
  const response = {} as Response;
  const request = {} as Request;
  const next = {} as NextFunction;

  beforeEach(() => {
    sinon.stub(NotaFiscalService, "getAllNotaFiscal").resolves(NotasFiscais);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  afterEach(sinon.restore);

  it("Shold return code 200.", async () => {
    await NotaFiscalController.getNotas(request, response, next);

    expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
  });

  it("Shold return the right json.", async () => {
    await NotaFiscalController.getNotas(request, response, next);

    expect((response.json as sinon.SinonStub).calledWith(NotasFiscais)).to.be.true;
  });
});
