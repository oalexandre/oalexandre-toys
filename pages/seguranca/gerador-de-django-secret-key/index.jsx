import ToolPage from "../../../components/tool/ToolPage";
import DjangoSecretKey from "../../../features/django/DjangoSecretKey";

const faq = [
  {
    question: "Para que serve a SECRET_KEY do Django?",
    answer:
      "O Django usa a SECRET_KEY para assinar cookies de sessão, tokens de redefinição de senha, mensagens e qualquer dado que precise de assinatura criptográfica. Quem tiver a chave consegue forjar sessões e se passar por outros usuários.",
  },
  {
    question: "A chave gerada aqui é igual à do Django?",
    answer:
      "Sim. A ferramenta usa o mesmo alfabeto e o mesmo comprimento de 50 caracteres da função get_random_secret_key(), que o Django chama ao criar um projeto com startproject.",
  },
  {
    question: "Posso usar a mesma chave em desenvolvimento e produção?",
    answer:
      "Não é recomendado. Use uma chave por ambiente e carregue a de produção a partir de variável de ambiente ou de um gerenciador de segredos. A chave nunca deve ser commitada no repositório.",
  },
  {
    question: "O que acontece se eu trocar a SECRET_KEY em produção?",
    answer:
      "Todas as sessões ativas são invalidadas e os usuários precisam entrar de novo. Links de redefinição de senha já enviados deixam de funcionar. Se precisar rotacionar sem derrubar sessões, use a configuração SECRET_KEY_FALLBACKS, disponível a partir do Django 4.1.",
  },
];

const Page = () => (
  <ToolPage
    path="/seguranca/gerador-de-django-secret-key"
    title="Gerador de SECRET_KEY para Django"
    description="Gere uma SECRET_KEY de 50 caracteres no mesmo formato de get_random_secret_key() do Django. Gerada no navegador com crypto.getRandomValues, pronta para o .env."
    lead="Uma chave de 50 caracteres no formato exato que o Django espera, pronta para copiar para o seu .env."
    tool={<DjangoSecretKey />}
    faq={faq}
    features={[
      "50 caracteres no alfabeto oficial do Django",
      "Copiar como SECRET_KEY=...",
      "Geração local",
    ]}
  >
    <h2>Como configurar a SECRET_KEY</h2>
    <p>
      Nunca deixe a chave escrita no settings.py de um repositório. Leia de uma variável de
      ambiente:
    </p>
    <pre>
      <code>{`# settings.py
import os

SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]`}</code>
    </pre>
    <p>E defina a variável no ambiente ou em um arquivo .env que esteja no .gitignore:</p>
    <pre>
      <code>{`# .env
DJANGO_SECRET_KEY=cole-a-chave-gerada-aqui`}</code>
    </pre>

    <h2>Gerando pelo terminal</h2>
    <p>Se já tiver o Django instalado, o próprio framework gera a chave:</p>
    <pre>
      <code>{`python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`}</code>
    </pre>
    <p>
      Esta página é útil quando você está em outra máquina, configurando um deploy no painel de um
      provedor ou ainda não tem o ambiente Python pronto.
    </p>

    <h2>Boas práticas</h2>
    <ul>
      <li>Uma chave diferente para cada ambiente: local, homologação e produção.</li>
      <li>Se a chave vazou ou foi commitada por engano, gere outra e troque imediatamente.</li>
      <li>
        Mantenha <code>DEBUG = False</code> em produção. Com DEBUG ligado, páginas de erro podem
        expor configurações.
      </li>
    </ul>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
