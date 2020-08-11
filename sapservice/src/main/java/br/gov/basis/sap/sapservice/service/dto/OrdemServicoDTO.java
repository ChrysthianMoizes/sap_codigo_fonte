package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class OrdemServicoDTO {

    private Integer id;

    private String nome;

    private Integer idProjeto;

    private Integer idSituacao;

    private String contato;

    private LocalDate dataProximaEntrega;

    private Integer qtdDefeitosCliente;

    private Integer qtdDefeitosInterno;

    private LocalDate prazo;

    private Double pontosFuncao;

    private String fabricas;

}
