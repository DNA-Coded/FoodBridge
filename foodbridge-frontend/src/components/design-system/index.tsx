import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select } from '../ui/select';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';

// --- BUTTON, INPUT, TEXTAREA, SELECT, BADGE, CARD ---
// Re-exporting standard shadcn items for a consolidated Design System API
export { Button, Input, Textarea, Select, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };

// --- MODAL ---
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, description, children, footer }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-lg rounded-xl border border-brand-border bg-brand-card p-lg shadow-xl animate-scale-in transition-all">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-brand-heading">{title}</h3>
            {description && <p className="mt-xs text-sm text-brand-body">{description}</p>}
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-xs hover:bg-gray-100"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="mt-md">{children}</div>
        {footer && <div className="mt-lg flex items-center justify-end gap-sm border-t border-brand-border pt-md">{footer}</div>}
      </div>
    </div>
  );
}

// --- DRAWER ---
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Drawer({ isOpen, onClose, title, description, children, footer }: DrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />
      {/* Panel */}
      <div className="relative z-10 w-full max-w-md h-full bg-brand-card border-l border-brand-border p-lg shadow-2xl flex flex-col justify-between animate-slide-in-right transition-all">
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-heading">{title}</h3>
              {description && <p className="mt-xs text-sm text-brand-body">{description}</p>}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors rounded-lg p-xs hover:bg-gray-100"
              aria-label="Close drawer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div className="mt-xl overflow-y-auto">{children}</div>
        </div>
        {footer && <div className="border-t border-brand-border pt-md flex items-center justify-end gap-sm">{footer}</div>}
      </div>
    </div>
  );
}

// --- EMPTY STATE ---
interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({ icon, title, description, actionText, onAction, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center p-2xl border border-dashed border-brand-border rounded-xl bg-brand-bgSecondary", className)}>
      <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mb-md">
        <span className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
      <h3 className="text-md font-semibold text-brand-heading">{title}</h3>
      <p className="mt-xs text-sm text-brand-body max-w-sm">{description}</p>
      {actionText && onAction && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onAction}
          className="mt-md"
        >
          {actionText}
        </Button>
      )}
    </div>
  );
}

// --- LOADING STATE ---
interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = 'Loading...', className }: LoadingStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-xl gap-sm", className)}>
      <div className="w-6 h-6 border-2 border-primary-200 border-t-primary-700 rounded-full animate-spin" />
      <span className="text-sm font-medium text-brand-body">{message}</span>
    </div>
  );
}

// --- STATISTICS CARD ---
interface StatisticsCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  change?: {
    value: number | string;
    isPositive: boolean;
  };
  icon?: string;
  className?: string;
}

export function StatisticsCard({ title, value, subtext, change, icon, className }: StatisticsCardProps) {
  return (
    <div className={cn("p-lg border border-brand-border bg-brand-card rounded-xl shadow-subtle hover:shadow-md hover:border-primary-300 transition-all duration-300 group", className)}>
      <div className="flex justify-between items-start">
        <span className="text-sm font-medium text-brand-body">{title}</span>
        {icon && (
          <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-primary-600 transition-colors">
            {icon}
          </span>
        )}
      </div>
      <div className="mt-sm flex items-baseline gap-sm">
        <span className="text-3xl font-semibold tracking-tight text-brand-heading">{value}</span>
        {change && (
          <span className={cn("text-xs font-semibold px-xs py-[2px] rounded-full", 
            change.isPositive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          )}>
            {change.isPositive ? '+' : ''}{change.value}
          </span>
        )}
      </div>
      {subtext && <p className="mt-xs text-xs text-brand-body">{subtext}</p>}
    </div>
  );
}

// --- SECTION CONTAINER ---
interface SectionContainerProps {
  tagline?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ tagline, title, description, children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-3xl px-md max-w-7xl mx-auto w-full flex flex-col items-center", className)}>
      {(tagline || title || description) && (
        <div className="text-center max-w-3xl mb-2xl">
          {tagline && (
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-widest bg-primary-100/50 px-sm py-[4px] rounded-full">
              {tagline}
            </span>
          )}
          {title && (
            <h2 className="mt-sm text-3xl md:text-4xl font-bold tracking-tight text-brand-heading">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-md text-base md:text-lg text-brand-body leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="w-full">{children}</div>
    </section>
  );
}

// --- CTA COMPONENT ---
interface CTAComponentProps {
  title: string;
  description: string;
  primaryActionText: string;
  onPrimaryAction: () => void;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export function CTAComponent({ title, description, primaryActionText, onPrimaryAction, secondaryActionText, onSecondaryAction, className }: CTAComponentProps) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto rounded-2xl border border-brand-border bg-gradient-to-br from-brand-bg to-brand-bgSecondary p-xl md:p-3xl text-center flex flex-col items-center relative overflow-hidden shadow-sm", className)}>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary-100/20 rounded-full blur-2xl -z-10 pointer-events-none" />
      
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-heading max-w-2xl">
        {title}
      </h3>
      <p className="mt-md text-brand-body text-base max-w-xl">
        {description}
      </p>
      
      <div className="mt-xl flex flex-col sm:flex-row gap-md justify-center w-full sm:w-auto">
        <Button 
          onClick={primaryActionText === 'Start Donating' ? onPrimaryAction : undefined}
          className="bg-primary-700 hover:bg-primary-800 text-white font-medium px-lg py-md rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 text-sm uppercase tracking-wide"
        >
          {primaryActionText}
        </Button>
        {secondaryActionText && onSecondaryAction && (
          <Button 
            variant="outline"
            onClick={onSecondaryAction}
            className="border-brand-border hover:bg-gray-50 text-gray-700 font-medium px-lg py-md rounded-lg shadow-subtle hover:shadow transition-all active:scale-95 text-sm uppercase tracking-wide"
          >
            {secondaryActionText}
          </Button>
        )}
      </div>
    </div>
  );
}
