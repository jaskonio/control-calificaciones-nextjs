"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { TrashIcon } from 'lucide-react';


type DeleteButtonProps = {
    data: any,
    canDelete: boolean,
    onDelete: any,
}
const TableDeleteButton = ({ data, canDelete, onDelete }: DeleteButtonProps) => {
    const { toast } = useToast();

    const handleDelete = async () => {
        await onDelete(data.id);
        toast({
            title: 'Eliminado',
            description: `El registro "${data.name}" ha sido eliminado correctamente.`,
            variant: 'default',
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="sm" className="">
                    <TrashIcon className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirmar Eliminación</DialogTitle>
                    <DialogDescription>
                        {canDelete
                            ? `¿Estás seguro de que deseas eliminar el registro "${data.name}"? Esta acción no se puede deshacer.`
                            : `No se puede eliminar el registro "${data.name}" porque existen otras entidades que dependen de esta.`}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant="outline">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <DialogClose>

                        {canDelete && (
                            <Button variant="destructive" onClick={handleDelete}>Eliminar</Button>)
                        }
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TableDeleteButton;
