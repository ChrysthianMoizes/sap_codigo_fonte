package br.gov.basis.sap.sapservice.builder;

import java.text.ParseException;
import java.util.Collection;

/**
 * Classe base para criação de construtores de entidades para testes
 * automatizados.
 *
 * @param <E> parâmetro
 */
public abstract class ConstrutorDeEntidade<E> {

    private CustomizacaoEntidade<E> customizacao;

    /**
     * Constroi a entidade, realizando as customizações, caso necessário e
     * persistindo a mesma no banco
     *
     * @return entidade construída
     */
    public E construir() throws ParseException {
        final E entidade = construirEntidade();
        if (isCustomizado()) {
            customizacao.executar(entidade);
            setCustomizacao(null);
        }
        return persistir(entidade);
    }

    /**
     * Este método permite a customização dos atributos da entidade antes da
     * persistência
     *
     * @param customizacao customizacao
     * @return entidade customizada
     */
    public ConstrutorDeEntidade<E> customizar(CustomizacaoEntidade<E> customizacao) {
        this.customizacao = customizacao;
        return this;
    }

    /**
     * Este método deve retornar uma instância da entidade inicializada com os
     * dados padrão para todos os testes.
     *
     * @return entidade construída
     */
    protected abstract E construirEntidade() throws ParseException;

    /**
     * Este método deve persistir e retornar a entidade recebida no parametro
     * <b>entidade</b>
     *
     * @param entidade entidade
     * @return entidade persistida
     */
    protected abstract E persistir(E entidade);

    /**
     * Este método deve persistir e retornar a entidade recebida no parametro
     * <b>entidade</b>
     *
     * @param id id
     * @return entidade persistida
     */
    protected abstract E obterPorId(Long id);

    /**
     * Este método deve persistir e retornar a entidade recebida no parametro
     * <b>entidade</b>
     *
     * @return entidade persistida
     */
    protected abstract Collection<E> obterTodos();

    /**
     * Is customizado boolean.
     *
     * @return boolean
     */
    public boolean isCustomizado() {
        return this.customizacao != null;
    }

    public void setCustomizacao(CustomizacaoEntidade<E> customizacao) {
        this.customizacao = customizacao;
    }
}
