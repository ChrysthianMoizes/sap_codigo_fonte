package br.gov.basis.sap.sapservice.service.dto;

import br.gov.basis.sap.sapservice.domain.Sprint;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class OrdemServicoDTO {

    private Integer id;

    private String nome;

    private Integer idProjeto;

    private Integer idSituacao;

    private LocalDate dataProximaEntrega;

    private Integer qtdDefeitosCliente;

    private Integer qtdDefeitosInterno;

    private LocalDate prazo;

    private Double pontosFuncao;

    private String fabrica;

    private List<Sprint> sprint = new ArrayList<>();
}
