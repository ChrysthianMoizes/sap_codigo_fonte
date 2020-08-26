package br.gov.basis.sap.sapservice.service.dto;

import br.gov.basis.sap.sapservice.domain.OrdemServico;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

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
