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

const DeleteCourseButton = ({ record, onDelete }: {record:any, onDelete:any}) => {
  const canDelete = !record.classes || record.classes.length === 0;
  const { toast } = useToast();

  const handleDelete = () => {
    onDelete(record.id);
    toast({
      title: 'Eliminado',
      description: `El registro "${record.name}" ha sido eliminado correctamente.`,
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
              ? `¿Estás seguro de que deseas eliminar el registro "${record.name}"? Esta acción no se puede deshacer.`
              : `No se puede eliminar el registro "${record.name}" porque existen otras entidades que dependen de esta.`}
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

export default DeleteCourseButton;
