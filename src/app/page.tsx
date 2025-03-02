import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">ChatApp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Conecte-se em tempo real
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] mx-auto lg:mx-0">
                  Nossa plataforma de chat oferece comunicação instantânea, segura e intuitiva para você e seus
                  contatos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
                  <Button size="lg" className="gap-1.5">
                    Começar agora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Saiba mais
                  </Button>
                </div>
              </div>

              <Card className="w-full max-w-md lg:max-w-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Bem-vindo ao ChatApp</CardTitle>
                  <CardDescription>Entre ou crie uma conta para começar a conversar</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">Entrar</Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/cadastrar">Cadastrar</Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Ou continue como convidado</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full">
                    Experimentar sem cadastro
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Recursos Principais</h2>
                <p className="text-muted-foreground md:text-lg">
                  Nossa plataforma oferece tudo que você precisa para uma comunicação eficiente
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Rápido</h3>
                <p className="text-center text-muted-foreground">
                  Mensagens entregues instantaneamente para uma comunicação sem atrasos
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Seguro</h3>
                <p className="text-center text-muted-foreground">
                  Criptografia de ponta a ponta para proteger suas conversas
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="rounded-full bg-primary p-2 text-primary-foreground">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Intuitivo</h3>
                <p className="text-center text-muted-foreground">
                  Interface amigável que torna a comunicação simples e agradável
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  O que nossos usuários dizem
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Veja o que as pessoas estão falando sobre nossa plataforma
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2024 ChatApp. Todos os direitos reservados.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Termos de Serviço
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacidade
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

const testimonials = [
  {
    name: "Ana Silva",
    title: "Designer",
    content: "O ChatApp revolucionou a forma como me comunico com minha equipe. É rápido, intuitivo e muito seguro!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carlos Mendes",
    title: "Desenvolvedor",
    content:
      "Uso o ChatApp diariamente para coordenar projetos. A interface é limpa e as mensagens são entregues instantaneamente.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Mariana Costa",
    title: "Gerente de Projetos",
    content: "Desde que adotamos o ChatApp, nossa comunicação interna melhorou significativamente. Recomendo a todos!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

