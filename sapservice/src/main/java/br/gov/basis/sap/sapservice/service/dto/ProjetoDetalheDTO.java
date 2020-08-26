package br.gov.basis.sap.sapservice.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProjetoDetalheDTO {
    private Integer id;
    private Integer idCliente;
    private Integer idLider;
    private String descricao;
    private Long qtdOsExecucao; //soma dos pontos de função de todas as OS dentro do projeto
    private Double qtdPtsFuncaoExec; //pontos de função na OS
    private String testador;
    private String revisor;
    private String gerente;
    private Boolean  defeitosCliente; //
    private Boolean impedimento; // se possui sprint com impedimento

    public ProjetoDetalheDTO(Integer id,
                             Integer idCliente,
                             Integer idLider,
                             String descricao,
                             Long qtdOsExecucao,
                             Double qtdPtsFuncaoExec,
                             String testador,
                             String revisor,
                             String gerente) {
        this.id = id;
        this.idCliente = idCliente;
        this.idLider = idLider;
        this.descricao = descricao;
        this.qtdOsExecucao = qtdOsExecucao;
        this.qtdPtsFuncaoExec = qtdPtsFuncaoExec;
        this.testador = testador;
        this.revisor = revisor;
        this.gerente = gerente;
    }

    public ProjetoDetalheDTO(String descricao, Long qtdOsExecucao, Double qtdPtsFuncaoExec) {
        this.descricao = descricao;
        this.qtdOsExecucao = qtdOsExecucao;
        this.qtdPtsFuncaoExec = qtdPtsFuncaoExec;
    }
}
