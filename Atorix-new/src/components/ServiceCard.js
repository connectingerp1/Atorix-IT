"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ icon, title, description, delay = 0, href = "/services" }) {
  return (
    <Card className="group overflow-hidden border-border/40 transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:bg-background/90">
      <CardHeader className="p-6">
        {icon && (
          <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit transition-colors duration-300 group-hover:bg-primary/20">
            <Image
              src={icon}
              alt={title}
              width={60}
              height={60}
              className="h-7 w-7 md:h-12 md:w-12 object-contain"
            />
          </div>
        )}
        <CardTitle className="text-xl tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-4 text-muted-foreground">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-2">
        <Button variant="link" asChild className="p-0 h-auto text-primary font-medium">
          <Link href={href} className="group-hover:underline flex items-center gap-1">
            Learn more
            <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
