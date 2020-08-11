package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjetoDTO {

    private Integer id;

    private String nome;

    private Integer idLider;

    private Integer idCliente;

    private String testador;

    private String revisor;

    private String gerente;

}
