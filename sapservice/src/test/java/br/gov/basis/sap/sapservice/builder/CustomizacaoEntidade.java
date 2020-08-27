package br.gov.basis.sap.sapservice.builder;

/**
 * Interface que define um contrato para permitir a customização de uma entidade
 * no momento de sua contrução, para utilização em testes
 *
 * @param <E> Tipo da entidade a ser customizado
 */
public interface CustomizacaoEntidade<E> {

    /**
     * Executa a customização da entidade
     *
     * @param entidade a ser customizada
     */
    void executar(E entidade);
}
