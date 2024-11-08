import React from 'react';


import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface QuizHintProps {
    hintString: string;
    formula: string;
}

export default function QuizHint({
    hintString,
    formula
}: QuizHintProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='ghost'
                >
                    <InfoIcon className="mx-2" /> Hint
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mx-2">
                <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Hints</h4>
                    <p className="text-sm text-muted-foreground">
                        {hintString}
                    </p>
                </div>
                <Separator className="my-2" />
                <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <p className="font-medium mb-2">Formula:</p>

                    <InlineMath math={formula} />

                </div>
            </PopoverContent>

        </Popover >
    );
};