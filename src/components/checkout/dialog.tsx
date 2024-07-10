import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props={
    open: boolean;
    onOpenChange:(open: boolean)=>void;
}

export const CheckoutDialog = ({open, onOpenChange}:Props) =>{

    const [step, setStep] = useState<CheckoutSteps>("users");

    let progressPct = 0;
    switch(step){
        case "users": 
            progressPct = 33;
            break;
        case "address":
            progressPct = 66;
            break;
        case "finish":
            progressPct = 100;
    }

    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === "users" && "Dados Pessoais"}
                        {step === "address" && "Endereço da entrega"}
                        {step === "finish" && "Enviar para o WhatsApp"}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={progressPct}/>
                <div className="flex flex-col gap-3">
                    {step === "users" && <StepUser setStep={setStep}/>}
                    {step === "address" && <StepAddress setStep={setStep}/>}
                    {step === "finish" && <StepFinish/>}
                </div>
            </DialogContent>
        </Dialog>
    )
}